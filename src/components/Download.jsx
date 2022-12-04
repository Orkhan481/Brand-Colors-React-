import React, { useContext, useEffect, useState } from "react";
import MainContext from "../MainContext";
import { GrDownload, GrLink, GrClose } from "react-icons/gr";

const Download = () => {
  const { selectedBrands, brands, setSelectedBrands } = useContext(MainContext)
  const [downloadUrl, setDownloadUrl] = useState();
  const [CssMethod, setCssMethod] = useState("css")

  useEffect(() => {
          if(selectedBrands.length > 0){

            let output = '';

            switch(CssMethod){
              default:
                    output += ":root{\n"
                selectedBrands.map(slug => {
                  let brand = brands.find(brand=> brand.slug === slug);
                 brand.colors.map((color, key)=>{
                  output += `--${slug}-${key}: #${color};\n`
                 })
                })
                output += "}"
              break;
             
              case 'scss':

                selectedBrands.map(slug => {
                  let brand = brands.find(brand=> brand.slug === slug);
                 brand.colors.map((color, key)=>{
                  output += `\$${slug}-${key}: #${color};\n`
                 })
                })
                break;

                case 'less':

                  selectedBrands.map(slug => {
                    let brand = brands.find(brand=> brand.slug === slug);
                   brand.colors.map((color, key)=>{
                    output += `@${slug}-${key}: #${color};\n`
                   })
                  })
                  break;
            }

            const blob = new Blob([output])
            const url = URL.createObjectURL(blob)
            setDownloadUrl(url)
            return () => {
              URL.revokeObjectURL(url);
              setDownloadUrl('')
            }
          }
  },[selectedBrands,CssMethod])
  

  


  const getLink = () =>{
       prompt("Here's the URL to share",`http://localhost:3000/collection/${selectedBrands.join(",")}`)
  }
  return (
    <div className="download">
      <div className="actions">
        <select onChange={ e => setCssMethod(e.target.value)}>
          <option value="css">CSS</option>
          <option value="scss">SCSS</option>
          <option value="less">LESS</option>
        </select>
        <a download={`brands.${CssMethod}`} href={downloadUrl} >
          <GrDownload />
        </a>
        <button onClick={getLink}>
          <GrLink />
        </button>
      </div>

      <div className="selected" onClick={() => setSelectedBrands([])}>
        <GrClose />
        {selectedBrands.length} brands selected
      </div>
    </div>
  );
};

export default Download;
