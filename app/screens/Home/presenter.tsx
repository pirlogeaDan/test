import { colors } from "../../theme";
import { PlanDays } from "./Home";

export const getValidationMessage = (
  isIbanValid: "valid" | "new" | "invalid"
) => {
  switch (isIbanValid) {
    case "valid":
      return "Your IBAN is valid!";
    case "invalid":
      return "The IBAN should match the following format:\nME25 5050 0001 2345 6789 51";
    case "new":
      return "The IBAN should match the following format:\nME25 5050 0001 2345 6789 51";
    default:
      return "The IBAN should match the following format:\nME25 5050 0001 2345 6789 51";
  }
};

export const getValidationTitle = (
  isIbanValid: "valid" | "new" | "invalid"
) => {
  switch (isIbanValid) {
    case "valid":
      return "Congratulations!";
    case "invalid":
      return "IBAN not valid!";
    case "new":
      return "Please enter your IBAN";
    default:
      return "Please enter your IBAN";
  }
};

export const getTitleColor = (isIbanValid: PlanDays) => {
  switch (isIbanValid) {
    case "valid":
      return colors.valid;
    case "invalid":
      return colors.invalid;
    case "new":
      return colors.primary;
    default:
      return colors.primary;
  }
};

/*
 * Returns 1 if the IBAN is valid
 * Returns FALSE if the IBAN's length is not as should be (for CY the IBAN Should be 28 chars long starting with CY )
 * Returns any other number (checksum) when the IBAN is invalid (check digits do not match)
 */
export const isValidIBANNumber = (input: String): boolean => {
  var CODE_LENGTHS = {
    ME: 22,
  };
  var iban = String(input)
      .toUpperCase()
      .replace(/[^A-Z0-9]/g, ""), // keep only alphanumeric characters
    code = iban.match(/^([A-Z]{2})(\d{2})([A-Z\d]+)$/), // match and capture (1) the country code, (2) the check digits, and (3) the rest
    digits;
  // check syntax and length
  if (!code || iban.length !== CODE_LENGTHS[code[1]]) {
    return false;
  }
  // rearrange country code and check digits, and convert chars to ints
  digits = (code[3] + code[1] + code[2]).replace(/[A-Z]/g, function (letter) {
    return (letter.charCodeAt(0) - 55).toString();
  });
  // final check
  return mod97(digits) === 1;
};

const mod97 = (string) => {
  var checksum = string.slice(0, 2),
    fragment;
  for (var offset = 2; offset < string.length; offset += 7) {
    fragment = String(checksum) + string.substring(offset, offset + 7);
    checksum = parseInt(fragment, 10) % 97;
  }
  return checksum;
};
