export const UserInfoForm = ({
  user,
  onChangeUser,
  onResetUser,
  onSaveUser,
}) => {
  const { name, age, hairColor } = user || {};

  return user ? (
    <div>
      <label>
        name
        <input
          type="text"
          value={name}
          onChange={(e) => {
            onChangeUser({ name: e.target.value });
          }}
        />
      </label>
      <label>
        age
        <input
          type="number"
          value={age}
          onChange={(e) => {
            onChangeUser({ age: e.target.value });
          }}
        />
      </label>
      <label>
        name
        <input
          type="text"
          value={hairColor}
          onChange={(e) => {
            onChangeUser({ hairColor: e.target.value });
          }}
        />
      </label>
      <button onClick={onResetUser}>Reset</button>
      <button onClick={onSaveUser}>Save</button>
    </div>
  ) : (
    <p>Loading....</p>
  );
};

//direct usage also can be done check on userInfoResourceForm.jsx 
// import { withEditableUser } from "./withEditableUser"
// export const UserInfoForm = withEditableUser(({ user, onChangeUser, onSaveUser, onResetUser})=>{

//     const { name, age, hairColor } = user || {};

//     return (
//         user ? (
//         <>
//         <label>
// 			Name:
// 			<input value={name} onChange={e => onChangeUser({ name: e.target.value })} />
// 		</label>
// 		<label>
// 			Age:
// 			<input type="number" value={age} onChange={e => onChangeUser({ age: Number(e.target.value) })} />
// 		</label>
// 		<label>
// 			Hair Color:
// 			<input value={hairColor} onChange={e => onChangeUser({ hairColor: e.target.value })} />
// 		</label>
// 		<button onClick={onResetUser}>Reset</button>
// 		<button onClick={onSaveUser}>Save Changes</button>
// 		</>
//         ): <p>Loading....</p>
//     )
// }, "123");
