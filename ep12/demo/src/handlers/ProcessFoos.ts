import "source-map-support/register";
import { SQSEvent } from "aws-lambda";

interface Foo {
  name: string;
}

export default (event: SQSEvent): void => {
  event.Records.forEach(record => {
    const foo = JSON.parse(record.body) as Foo;
    if (foo.name === "fail") {
      throw new Error(`Can't process foo "${foo.name}"`);
    }

    console.log(`Processing foo "${JSON.stringify(foo)}"`);
  });
};
