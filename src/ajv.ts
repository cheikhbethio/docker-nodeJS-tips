import Ajv, {JSONSchemaType} from "ajv"
const ajv = new Ajv();

interface MyData {
  foo: number;
  bar?: string;
}

const schema: JSONSchemaType<MyData> = {
  type: "object",
  properties: {
    bar: { type: "string", nullable: true },
    foo: { type: "integer" },
  },
  required: ["foo"],
  additionalProperties: false,
};

export function toto () {

  // validate is a type guard for MyData - type is inferred from schema type
  const validate = ajv.compile(schema)

  const data = {
    foo: 1,
    bar: "abc",
  }

  if (validate(data)) {
    // data is MyData here
    console.log("$******************", data.foo)
  } else {
    console.log('%%%%%%%%%%%%%%%%%%%%%%', validate.errors)
  }
}
