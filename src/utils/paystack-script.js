import PaystackPop from "@paystack/inline-js";

export const payWithPaystack = ({ email, amount, onSuccess, onCancel }) => {
  let handler = PaystackPop.setup({
    key: "pk_test_06e3e78a03bbd025f9c28d914e1014cb5d0cf664", // Replace with your public key
    email: email,
    amount: amount * 100,
    ref: "" + Math.floor(Math.random() * 1000000000 + 1), // generates a pseudo-unique reference. Please replace with a reference you generated. Or remove the line entirely so our API will generate one for you
    // label: "Optional string that replaces customer email"
    onCancel: function () {
      //   onCancel();
    },
    onSuccess: function (response) {
      let message = "Payment complete! Reference: " + response.reference;
      if (response.status.toLowerCase() === "success") {
        onSuccess();
      }
    },
  });

  handler.openIframe();
};
