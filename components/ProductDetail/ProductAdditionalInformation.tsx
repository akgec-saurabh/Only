import { additionalInformationProps } from "@/types/product";

const ProductAdditionalInformation: React.FC<additionalInformationProps> = ({
  ...props
}) => {
  console.log(
    "----------------------PROPS[ProductAdditionalInformation]-------------------------",
    props,
  );
  return (
    <div className="py-12">
      <table className="flex gap-12">
        <thead>
          <tr className="flex flex-col ">
            <th className="mb-7 font-medium">Weight</th>
            <th className="mb-7 font-medium">Dimensions</th>
            <th className="mb-7 font-medium">Size</th>
            <th className="mb-7 font-medium">Color</th>
            <th className="mb-7 font-medium">Storage</th>
          </tr>
        </thead>
        <tbody>
          <tr className="flex flex-col text-sm ">
            <td className="mb-7 py-[3px] ">{props.weight}</td>
            <td className="mb-7 py-[3px]">
              {props.dimensions.length}x{props.dimensions.width}x
              {props.dimensions.height} cm
            </td>
            <td className="mb-7 py-[3px]">{props.sizes.join(", ")}</td>

            <td className="mb-7 py-[3px]">
              {props.colors.map((color) => color.name).join(", ")}
            </td>
            <td className="mb-7 py-[3px]">{props.storage}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ProductAdditionalInformation;
