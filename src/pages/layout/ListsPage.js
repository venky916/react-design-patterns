import { SmallPersonListItem } from "../../components/layoutComponents/listComponents/people/SmallPersonListItem";
import { RegularList } from "../../components/layoutComponents/listComponents/RegularList";
import { LargePersonListItem } from "../../components/layoutComponents/listComponents/people/LargePersonListItem";
import { SmallProductListItem } from '../../components/layoutComponents/listComponents/products/SmallProductListItem';
import { LargeProductListItem } from '../../components/layoutComponents/listComponents/products/LargeProductListItem'
import { NumberedList } from "../../components/layoutComponents/listComponents/NumberedList";

const people = [
    {
        name: "John Doe",
        age: 54,
        hairColor: "brown",
        hobbies: ["swimming", "bicycling", "video games"],
    },
    {
        name: "Brenda Smith",
        age: 33,
        hairColor: "black",
        hobbies: ["golf", "mathematics"],
    },
    {
        name: "Jane Garcia",
        age: 27,
        hairColor: "blonde",
        hobbies: ["biology", "medicine", "gymnastics"],
    },
];

const products = [
    {
        name: "Flat-Screen TV",
        price: "$300",
        description: "Huge LCD screen, a great deal",
        rating: 4.5,
    },
    {
        name: "Basketball",
        price: "$10",
        description: "Just like the pros use",
        rating: 3.8,
    },
    {
        name: "Running Shoes",
        price: "$120",
        description: "State-of-the-art technology for optimum running",
        rating: 4.2,
    },
];

export const ListsPage = () => {
    return (
        <>
            <RegularList items={ people } itemComponent={ SmallPersonListItem } resourceName="person" />
            <NumberedList items={ people } itemComponent={ LargePersonListItem } resourceName="person" />
            <RegularList items={ products } itemComponent={ SmallProductListItem } resourceName='product' />
            <NumberedList items={ products } itemComponent={ LargeProductListItem } resourceName='product' />
        </>
    );
};
