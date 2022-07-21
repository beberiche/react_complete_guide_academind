import React, { useCallback, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as userActions from "../store/modules/user";
import { getUserList } from "../store/modules/user";

const User = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getUserList());
  }, [dispatch]);

  const keyInput = useRef();
  const nameInput = useRef();
  const ageInput = useRef();
  const nicknameInput = useRef();

  const addUser = useCallback(
    (event) => {
      event.preventDefault();
      const userData = {
        key: keyInput.current.value,
        name: nameInput.current.value,
        nickname: nicknameInput.current.value,
        age: ageInput.current.value,
      };
      dispatch(userActions.addUser(userData));
    },
    [dispatch]
  );

  return (
    <>
      <h1>유저 확인</h1>
      {users.map((user) => (
        <div key={user.key}>
          <div>이름 : {user.name}</div>
          <div>닉네임 : {user.nickname}</div>
          <div>나이 : {user.age}</div>
        </div>
      ))}
      <form onSubmit={(e) => addUser(e)}>
        <h2>유저 등록</h2>
        <div>
          <input type="text" placeholder="key 값도 적어줘..." ref={keyInput} />
        </div>
        <div>
          <input type="text" placeholder="이름" ref={nameInput} />
        </div>
        <div>
          <input type="number" placeholder="나이" ref={ageInput} />
        </div>
        <div>
          <input type="text" placeholder="닉네임" ref={nicknameInput} />
        </div>
        <button>유저 등록</button>
      </form>
    </>
  );
};

// export async function getStaticProps() {
//   const response = await fetch("https://jsonplaceholder.typicode.com/users");
//   const data = await response.json();

//   return {
//     props: {
//       user: data,
//     },
//   };
// }

export default User;
