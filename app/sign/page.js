"use client"
// Import dependencies
import React, { useRef, useState, useEffect } from "react";
import * as tf from "@tensorflow/tfjs";
import Webcam from "react-webcam";
import {drawRect, getLabel} from "./utilities";

function SignLanguage() {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);
  const [error, setError] = useState("");
  const [modelReady, setModelReady] = useState(false);
  const [cameraReady, setCameraReady] = useState(false);
  const [diagnostics, setDiagnostics] = useState({frames: 0, fps: 0, label: "None", confidence: 0});
  const inferenceRef = useRef({frames: 0, startedAt: 0});

  // Main function
  const runCoco = async () => {
    const net = await tf.loadGraphModel('/model/model.json');
    return net;
  };

  const detect = async (net) => {
    // Check data is available
    if (
      typeof webcamRef.current !== "undefined" &&
      webcamRef.current !== null &&
      webcamRef.current.video.readyState === 4
    ) {
      // Get Video Properties
      const video = webcamRef.current.video;
      const videoWidth = webcamRef.current.video.videoWidth;
      const videoHeight = webcamRef.current.video.videoHeight;

      // Set video width
      webcamRef.current.video.width = videoWidth;
      webcamRef.current.video.height = videoHeight;

      // Set canvas height and width
      canvasRef.current.width = videoWidth;
      canvasRef.current.height = videoHeight;

      // 4. TODO - Make Detections
      const img = tf.browser.fromPixels(video)
      const resized = tf.image.resizeBilinear(img, [640,480])
      const casted = resized.cast('int32')
      const expanded = casted.expandDims(0)
      const obj = await net.executeAsync(expanded)
      const boxes = await obj[1].array()
      const classes = await obj[2].array()
      const scores = await obj[4].array()

      const topIndex = scores[0].reduce((best, score, index, values) => score > values[best] ? index : best, 0);
      const frames = ++inferenceRef.current.frames;
      if (frames % 10 === 0) {
        const elapsed = (performance.now() - inferenceRef.current.startedAt) / 1000;
        setDiagnostics({
          frames,
          fps: Math.round(frames / elapsed),
          label: getLabel(classes[0][topIndex]),
          confidence: Math.round(scores[0][topIndex] * 100)
        });
      }
      
      // Draw mesh
      const ctx = canvasRef.current.getContext("2d");

      // 5. TODO - Update drawing utility
      // drawSomething(obj, ctx)  
      requestAnimationFrame(()=>{drawRect(boxes[0], classes[0], scores[0], 0.5, videoWidth, videoHeight, ctx)});

      tf.dispose(img)
      tf.dispose(resized)
      tf.dispose(casted)
      tf.dispose(expanded)
      tf.dispose(obj)

    }
  };

  useEffect(() => {
    let stopped = false;
    let frame;
    let net;

    const run = async () => {
      try {
        net = await runCoco();
        setModelReady(true);
        inferenceRef.current.startedAt = performance.now();
        const loop = async () => {
          try {
            await detect(net);
          } catch (e) {
            setError(`Inference failed: ${e.message}`);
            console.error(e);
            return;
          }
          if (!stopped) frame = requestAnimationFrame(loop);
        };
        loop();
      } catch (e) {
        setError("The sign detector could not start. Please refresh and allow camera access.");
        console.error(e);
      }
    };

    run();
    return () => {
      stopped = true;
      cancelAnimationFrame(frame);
      net?.dispose();
    };
  }, []);

  return (
    <main className="mx-auto w-full max-w-5xl px-5 py-8 md:px-8">
      <div className="mb-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <h2 className="text-2xl font-bold text-gray-900">Sign detector</h2>
        <p className="mt-1 text-sm text-slate-600">Show one supported sign clearly in the camera. Boxes appear at 50% confidence or higher.</p>
        <div className="mt-4 grid gap-3 text-sm sm:grid-cols-4">
          <p><span className="font-semibold text-slate-700">Model:</span> {modelReady ? "Ready" : "Loading…"}</p>
          <p><span className="font-semibold text-slate-700">Camera:</span> {cameraReady ? "Ready" : "Waiting…"}</p>
          <p><span className="font-semibold text-slate-700">Inference:</span> {diagnostics.frames ? `${diagnostics.frames} frames (${diagnostics.fps} FPS)` : "Waiting…"}</p>
          <p><span className="font-semibold text-slate-700">Top result:</span> {diagnostics.label} ({diagnostics.confidence}%)</p>
        </div>
        {error ? <p className="mt-4 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700" role="alert">{error}</p> : null}
      </div>
      <div className="relative mx-auto aspect-[4/3] w-full max-w-[640px] overflow-hidden rounded-2xl bg-slate-900 shadow-lg">
        <Webcam
          ref={webcamRef}
          muted={true}
          audio={false}
          onUserMedia={() => { setCameraReady(true); setError(""); }}
          onUserMediaError={() => { setCameraReady(false); setError("Camera access failed. Allow camera access in your browser, then refresh."); }}
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            zIndex: 9,
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />

        <canvas
          ref={canvasRef}
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            zIndex: 10,
            width: "100%",
            height: "100%",
          }}
        />
      </div>
    </main>
  );
}

export default SignLanguage;
