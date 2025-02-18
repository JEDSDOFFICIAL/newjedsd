import {
    Html,
    Head,
    Font,
    Preview,
    Heading,
    Row,
    Section,
    Text,
  } from "@react-email/components";
  
  interface PaperUploadEmailProps {
    paperName: string;
  }
  
  export default function PaperUploadEmail({  paperName }: PaperUploadEmailProps) {
    return (
      <Html lang="en" dir="ltr">
        <Head>
          <title>Paper Uploaded Successfully</title>
          <Font
            fontFamily="Roboto"
            fallbackFontFamily="Verdana"
            webFont={{
              url: "https://fonts.gstatic.com/s/roboto/v27/KFOmCnqEu92Fr1Mu4mxKKTU1Kg.woff2",
              format: "woff2",
            }}
            fontWeight={400}
            fontStyle="normal"
          />
        </Head>
        <Preview>Your paper "{paperName}" has been uploaded successfully.</Preview>
        <Section>
         
          <Row>
            <Text>
              Congratulations! Your paper titled "{paperName}" has been successfully uploaded to the Journal of Embedded and Digital System Design (JEDSD).
            </Text>
          </Row>
          <Row>
            <Text>
              Our editorial team will review your submission, and you will be notified of any updates regarding its status.
            </Text>
          </Row>
          <Row>
            <Text>
              If you have any questions, feel free to contact us.
            </Text>
          </Row>
          <Row>
            <Text>
              Best regards,
              <br />
              The JEDSD Editorial Team
            </Text>
          </Row>
        </Section>
      </Html>
    );
  }