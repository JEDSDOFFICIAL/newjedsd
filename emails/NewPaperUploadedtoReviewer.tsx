import {
    Html,
    Head,
    Font,
    Preview,
    Heading,
    Row,
    Section,
    Text,
    Button,
  } from "@react-email/components";
  import { Paper } from "@/model/User";
  
  export default function ReviewerNotificationEmail(username:string,reviewerName:string,{  paperName, authors, keywords,pointofContact,paperurl, abstract,createdAt,coverletterUrl }: Paper) {
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
            <Heading as="h2">Dear Shirshendu sir,</Heading>
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
          <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          border: "1px solid #ddd",
        }}
      >
        <thead>
          <tr style={{ backgroundColor: "#f2f2f2", textAlign: "left" }}>
            <th style={{ padding: "8px", border: "1px solid #ddd" }}>Name</th>
            <th style={{ padding: "8px", border: "1px solid #ddd" }}>Affiliation</th>
            <th style={{ padding: "8px", border: "1px solid #ddd" }}>Contact Number</th>
            <th style={{ padding: "8px", border: "1px solid #ddd" }}>Email</th>
          </tr>
        </thead>
        <tbody>
          {authors.map((author, index) => (
            <tr key={index} style={{ borderBottom: "1px solid #ddd" }}>
              <td style={{ padding: "8px", border: "1px solid #ddd" }}>{author.name}</td>
              <td style={{ padding: "8px", border: "1px solid #ddd" }}>{author.affiliation}</td>
              <td style={{ padding: "8px", border: "1px solid #ddd" }}>{author.contactNumber}</td>
              <td style={{ padding: "8px", border: "1px solid #ddd" }}>{author.emailId}</td>
            </tr>
          ))}
        </tbody>
      </table>
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
    <strong>Please download the paper for preview:</strong>  
    <a href={paperurl} target="_blank" rel="noopener noreferrer" download>
      Download Paper
    </a>
  </Text>
</Row>
<Row>
  <Text>
    <strong>Download the cover letter for preview:</strong>  
    <a href={coverletterUrl || ""} target="_blank" rel="noopener noreferrer">
      Download Cover Letter
    </a>
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
   