import React, { useState } from "react";
import { useStore } from "~/stores";
import { wallpapers, user } from "~/configs";
import type { MacActions } from "~/types";

export default function Login(props: MacActions) {
  const [password, setPassword] = useState("");
  const [sign, setSign] = useState("Click to enter");
  const dark = useStore((state) => state.dark);

  const keyPress = (e: React.KeyboardEvent) => {
    const keyCode = e.key;
    if (keyCode === "Enter") loginHandle();
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setPassword(e.target.value);
  };

  const loginHandle = () => {
    if (user.password === "" || user.password === password) {
      // not set password or password correct
      props.setLogin(true);
    } else if (password !== "") {
      // password not null and incorrect
      setSign("Incorrect password");
    }
  };

  return (
    <div
      className="w-full h-full login text-center"
      style={{
        background: `url(${
          dark ? wallpapers.night : wallpapers.day
        }) center/cover no-repeat`
      }}
      onClick={() => loginHandle()}
    >
      <div className="inline-block w-auto relative top-6/7 -mt-40">
        {/* Avatar */}
        <img
          className="rounded-full w-24 h-24 my-0 mx-auto"
          src={user.avatar}
          alt="img"
        />
        <div className="font-semibold mt-2 text-xl text-white">{user.name}</div>

        {/* Password Input */}
        <div className="mx-auto grid grid-cols-5 w-44 h-8 mt-4 rounded-2xl backdrop-blur-2xl bg-gray-300/50">
          <input
            className="text-sm text-white col-start-1 col-span-4 no-outline bg-transparent px-4"
            type="password"
            placeholder="Enter Password"
            onClick={(e) => e.stopPropagation()}
            onKeyPress={keyPress}
            value={password}
            onChange={handleInputChange}
          />
        </div>

        <div className="text-sm mt-2 text-gray-200 cursor-pointer">{sign}</div>
      </div>

      {/* buttons */}
      <div className="text-sm fixed bottom-16 left-0 right-0 mx-auto flex flex-row space-x-4 w-max">
      </div>
    </div>
  );
}
