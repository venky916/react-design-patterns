import { withEditableResource } from "./withEditableResource";

export const UserInfoResourceForm = withEditableResource(({
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
}, 'users/234','user')
