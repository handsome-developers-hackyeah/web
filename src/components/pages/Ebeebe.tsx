import * as ml5 from "ml5";
import { useEffect, useState } from "react";

const Ebeebe = () => {
  const [selectedImage, setSelectedImage] = useState({});

  useEffect(() => {
    if (Object.keys(selectedImage)) {
    }
  }, [selectedImage]);

  const loaded = () => {};

  const onSelectFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setSelectedImage(e.target.files[0]);
    }
  };
  return (
    <div>
      <input type="file" onChange={onSelectFile} />
    </div>
  );
};

export default Ebeebe;
