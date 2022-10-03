import { useEffect, useState } from "react";

import { getLocalStorageData } from "src/helper/helper";

import ExampleForm from "src/components/ExampleForm";
import ExampleTable from "src/components/ExampleTable";

const ExamplePages = () => {
  const [data, setData] = useState<any>([]);
  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    const data = getLocalStorageData();
    setData(data);
  };

  return (
    <div>
      <ExampleForm handleRefresh={getData} />
      <ExampleTable handleRefresh={getData} data={data} />
    </div>
  );
};

export default ExamplePages;
