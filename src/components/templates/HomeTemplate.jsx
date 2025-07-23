import styled from "styled-components";
import { useAuthStore } from "../../store/AuthStore"
// import { UserAuth } from "../../context/AuthContext";
import { UserAuth } from "../../index"

export function HomeTemplate() {
  const { logout } = useAuthStore();
  const { user } = UserAuth();
  return (<Container>
    <p>Home Template</p>
    <button onClick={logout} >Logout</button>
    <span>{user?.user_metadata?.avatar_url}</span>
    <img src={user?.user_metadata?.avatar_url} alt="" />
  </Container>);
}
const Container = styled.div`
  height: 100vh;
`