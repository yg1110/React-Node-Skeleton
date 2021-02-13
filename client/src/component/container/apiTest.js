import React, { useState, useRef } from "react";
import service from "../../service";

const ApiTest = ({ getUsers }) => {
  const [input, setInput] = useState({
    id: "",
    name: "",
  });
  const { id, name } = input;

  const userId = useRef(0);

  const getUser = async () => {
    const res = await service.getUsers(id);
    console.log(res.data);
    setInput({
      id: "",
      name: "",
    });
  };

  const postUser = async () => {
    const user = {
      id: userId.current,
      name,
    };
    const res = await service.postUser(user);
    console.log(res.data);
    userId.current += 1;
    setInput({
      id: "",
      name: "",
    });
    getUsers();
  };

  const putUser = async () => {
    const user = {
      id,
      name,
    };
    const res = await service.putUser(user);
    console.log(res.data);
    setInput({
      id: "",
      name: "",
    });
    getUsers();
  };

  const deleteUser = async () => {
    const res = await service.deleteUser(id);
    console.log(res.data);
    setInput({
      id: "",
      name: "",
    });
    getUsers();
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value,
    });
  };

  return (
    <>
      <input type="text" value={id} onChange={onChange} name="id" />
      <input type="text" value={name} onChange={onChange} name="name" />

      <button type="button" value="submit" onClick={getUser}>
        개별 조회
      </button>

      <button type="button" value="submit" onClick={postUser}>
        추가
      </button>

      <button type="button" value="submit" onClick={putUser}>
        수정
      </button>

      <button type="button" value="submit" onClick={deleteUser}>
        삭제
      </button>
    </>
  );
};

export default ApiTest;
