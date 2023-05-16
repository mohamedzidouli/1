module.exports = {
    postData: async (url, data) => {
      try {
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });
        const responseData = await response.json();
        console.log('Saved data:', responseData);
      } catch (error) {
        console.error('Error saving data:', error);
      }
    },
  
    handleSaveData: async (data) => {
        try {
          const formattedData = data.map(({  mouseCoordinates, keyboardCoordinates }) => ({  mouseCoordinates, keyboardCoordinates}));
          await module.exports.postData('http://localhost:3000/data', formattedData);
        } catch (error) {
          console.error('Error saving data:', error);
        }
      },
  };