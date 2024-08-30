const houseSheetData = async (url) => {
    const baseUrl = window.location.origin;
    const data = await fetch(baseUrl + url);
    return data.json();
  };



export {houseSheetData}
