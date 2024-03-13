import hocCountLogic from './hocCountLogic';

const HeadingHoc = ({ count, updateCount }) => {
  return <h1 onMouseOver={updateCount}>hover over me for count{count}</h1>

}
export default hocCountLogic(HeadingHoc);
