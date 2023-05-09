import { WebsiteFormData } from "@caphub-group/caphub-types";
import { Dispatch, SetStateAction } from "react";

export interface FieldProps {
  formData: WebsiteFormData;
  setFormData: Dispatch<SetStateAction<WebsiteFormData>>;
}
