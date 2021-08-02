import {useSelector} from "react-redux";

const AppLayout = () => {
  const user = useSelector((state: any) => state.user.info)
  console.log(user)
  return (
    <div>
      <p>AppLayout</p>
      {JSON.stringify(user, null, 2)}
    </div>
  )
}

export default AppLayout