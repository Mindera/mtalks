import "source-map-support/register";
import { APIGatewayEvent, APIGatewayProxyResult } from "aws-lambda";
import { SQS } from "aws-sdk";

const QueueUrl = process.env.QUEUE_URL;

const createAPIResponse = (
  statusCode: number,
  body: any
): APIGatewayProxyResult => ({
  statusCode,
  body: typeof body === "string" ? body : JSON.stringify(body)
});

export default async (
  event: APIGatewayEvent
): Promise<APIGatewayProxyResult> => {
  const sqs = new SQS();

  try {
    await sqs
      .sendMessage({
        QueueUrl,
        MessageBody: event.body
      })
      .promise();

    return createAPIResponse(200, { ok: true });
  } catch (err) {
    console.log(
      `Failed to send message to queue "${QueueUrl}" - ${err.message}`
    );
    return createAPIResponse(500, { ok: false, error: err.message });
  }
};
