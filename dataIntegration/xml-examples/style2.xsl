<?xml version="1.0"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:output method="html"/>

    <xsl:template match="/">
        <html>
            <head>
                <title>Students</title>
            </head>
            <body>
                <p>hello </p>
                <p> 
                Hej <xsl:value-of select="students/student/firstName"/> is a student
                </p>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>