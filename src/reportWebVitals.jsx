import * as webVitals from 'web-vitals';

const reportWebVitals = async (onPerfEntry) => {
  console.log('webVitals:', webVitals); // Log the imported module

  if (onPerfEntry && typeof onPerfEntry === 'function') {
    const { getCLS, getFID, getFCP, getLCP, getTTFB } = webVitals;

    if (getCLS && getFID && getFCP && getLCP && getTTFB) {
      try {
        await Promise.all([
          getCLS(onPerfEntry),
          getFID(onPerfEntry),
          getFCP(onPerfEntry),
          getLCP(onPerfEntry),
          getTTFB(onPerfEntry),
        ]);
      } catch (error) {
        console.error("Failed to report web-vitals:", error);
      }
    } else {
      console.error("web-vitals functions are not available.");
    }
  }
};

export default reportWebVitals;