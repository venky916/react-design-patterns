export const LargePersonListItem = ({ person }) => {
    const { name, age, hairColor, hobbies } = person;
    return (
        <>
            <h3>name :{ name }</h3>
            <p>Age : { age } years</p>
            <p> HairColor : { hairColor }</p>
            <h3>Hobbies</h3>
            <ul>
                { hobbies.map((hobby) => (
                    <li key={ hobby }>{ hobby } </li>
                )) }
            </ul>
        </>
    );
};
