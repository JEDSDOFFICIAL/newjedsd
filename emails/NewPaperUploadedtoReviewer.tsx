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
  
  import { Paper } from "@/model/User";
  
  export default function ReviewerNotificationEmail(username:string,reviewerName:string,{  paperName, authors, keywords,pointofContact,paperurl, abstract,createdAt }: Paper) {
    return (
      <Html lang="en" dir="ltr">
        <Head>
          <title>New Paper Submission for Review</title>
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
        <Preview>A new paper "{paperName}" has been submitted for your review.</Preview>
        <Section>
          <Row>
            <Heading as="h2">Dear {reviewerName},</Heading>
          </Row>
          <Row>
            <Text>
              A new paper has been submitted for review in the Journal of Embedded and Digital System Design (JEDSD). Below are the details:
            </Text>
          </Row>
          <Row>
            <Text>
              <strong>It has been uploaded by :</strong> {username}
            </Text>
          </Row>
          <Row>
            <Text>
              <strong>The Authors are  :</strong> {authors.map((author) => author.name).join(", ")}
              and the details of them are 
                {authors.map((author) => author.affiliation).join(", ")}
                {authors.map((author) => author.contactNumber).join(", ")}
                {authors.map((author) => author.emailId).join(", ")}
            </Text>
          </Row>
          <Row>
            <Text>
              <strong>Title:</strong> {paperName}
            </Text>
          </Row>
          <Row>
            <Text>
              <strong>Submission Date:</strong> {createdAt?.toLocaleDateString()}
            </Text>
          </Row>
          <Row>
            <Text>
              <strong>Abstract:</strong> {abstract}
            </Text>
          </Row>
            <Row>
                <Text>
                <strong>Keywords:</strong> {keywords.join(", ")}
                </Text>
            </Row>
            <Row>
                <Text>
                <strong>Point of Contact:</strong> {pointofContact.name}
                </Text>
            </Row>
            <Row>
                <Text>
                <strong>Point of Contact Email:</strong> {pointofContact.emailId}
                </Text>
            </Row>
            <Row>
                <Text>
                <strong>Point of Contact Contact Number:</strong> {pointofContact.contactNumber}
                </Text>
            </Row>
            <Row>
                <Text>
                <strong>Point of Contact Affiliation:</strong> {pointofContact.affiliation}
                </Text>
            </Row>
            <Row>
                <Text>
                <strong>The Paper Link is :</strong> {paperurl}
                </Text>
                </Row>

          <Row>
            <Text>
              Please review the submission at your earliest convenience. If you have any questions, feel free to contact us.
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
   