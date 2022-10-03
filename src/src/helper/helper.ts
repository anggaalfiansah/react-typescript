type Tdata = {
  email: string;
  name: string;
};

export const getLocalStorageData = () => {
  try {
    const data = localStorage.getItem("data");
    if (data) {
      return JSON.parse(data);
    } else {
      return [];
    }
  } catch (error) {
    alert(error);
  }
};

export const saveToLocalStorage = (data: Tdata) => {
  try {
    const currentData = getLocalStorageData();
    const newData = [...currentData, data];
    localStorage.setItem("data", JSON.stringify(newData));
    alert("success");
  } catch (error) {
    alert(error);
  }
};

export const updateToLocalStorage = (newData: Tdata, dataIndex: number) => {
  try {
    const currentData = getLocalStorageData();
    const data = [...currentData];
    data[dataIndex] = newData;
    localStorage.setItem("data", JSON.stringify(data));
    alert("success");
  } catch (error) {
    alert(error);
  }
};

export const deleteToLocalStorage = (dataIndex: number) => {
  try {
    const data = getLocalStorageData();
    data.splice(dataIndex, 1);
    localStorage.setItem("data", JSON.stringify(data));
    alert("success");
  } catch (error) {
    alert(error);
  }
};
