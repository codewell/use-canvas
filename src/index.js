/**
 * Use canvas hook for react
 * @param {object} React - The version of React that you use
 * @param {object} param1 - Object with config options
 */
const useCanvas = (React, { onInit }) => {
  const [rendered, setRendered] = React.useState(false);
  const [canvas, setCanvas] = React.useState(null);

  const canvasRef = React.useCallback(node => {
    if (node !== null) {
      if (!rendered) {
        setRendered(true);
        setCanvas(node);
      } else {
        // On init is run when the canvas is mounted
        onInit(canvas);
      }
    }
  }, [rendered, canvas, onInit]);

  return { canvas, canvasRef };
};

export default useCanvas;
