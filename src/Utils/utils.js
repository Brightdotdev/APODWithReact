export const getDominantColorAndHue = (imageUrl) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = "Anonymous"; // Prevents CORS issues
    img.src = imageUrl;

    img.onload = () => {
      try {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");

        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0);

        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);

        // Use Web Worker
        const worker = new Worker(new URL("./colorWorker.js", import.meta.url));

        worker.postMessage({ imageData });

        worker.onmessage = (event) => {
          resolve(event.data); // Contains { rgb, hex, hue }
          worker.terminate(); // Cleanup worker after processing
        };

        worker.onerror = (error) => {
          reject("Worker error: " + error.message);
          worker.terminate();
        };

      } catch (error) {
        reject("Error processing image: " + error.message);
      }
    };

    img.onerror = () => reject("Failed to load image: " + imageUrl);
  });
};
