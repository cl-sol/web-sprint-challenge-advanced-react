import React from "react";
import { render, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
//arrange
const {getByText} = render(<CheckoutForm />)
//act
const header = getByText(/checkout form/i)
//assert
expect(header).toBeInTheDocument();
});

test("form shows success message on submit with form details", () => {
//arrange
const {getByLabelText} = render(<CheckoutForm />)
//act
const firstNameInput = getByLabelText(/first name/i)
const lastNameInput = getByLabelText(/last name/i)
const addressInput = getByLabelText(/address/i)
const cityInput = getByLabelText(/city/i)
const stateInput = getByLabelText(/state/i)
const zipCodeInput = getByLabelText(/zip/i)

fireEvent.change(firstNameInput, {target: {value: "Claudia"}})
fireEvent.change(lastNameInput, {target: {value: "Sol"}})
fireEvent.change(addressInput, {target: {value: "123 Main Street"}})
fireEvent.change(cityInput, {target: {value: "Winchester"}})
fireEvent.change(stateInput, {target: {value: "Virginia"}})
fireEvent.change(zipCodeInput, {target: {value: "12345"}})
//assert
expect(firstNameInput.value).toBe("Claudia")
expect(lastNameInput.value).toBe("Sol")
expect(addressInput.value).toBe("123 Main Street")
expect(cityInput.value).toBe("Winchester")
expect(stateInput.value).toBe("Virginia")
expect(zipCodeInput.value).toBe("12345")
})

test("submit button", () => {
const {getByText} = render(<CheckoutForm />)

const checkoutBtn = getByText("Checkout")
fireEvent.click(checkoutBtn)
})


