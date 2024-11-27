import { LargeProductListItem } from "../../components/layoutComponents/listComponents/products/LargeProductListItem"
import { Modal } from "../../components/layoutComponents/modalComponents/Modal"

const products = [
    {
        name: "Flat-Screen TV",
        price: "$300",
        description: "Huge LCD screen, a great deal",
        rating: 4.5,
    },
]

export const ModalPage = () => {
    return (
        <Modal>
            <LargeProductListItem product={ products[0] } />
        </Modal>
    )
}