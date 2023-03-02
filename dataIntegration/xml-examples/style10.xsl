<?xml version="1.0"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:output method="html"/>

    <xsl:template match="/">
        <html>
            <head>
                <title>Students</title>
            </head>
        </html>
        <body>
            <xsl:for-each select="students/student">
            <p> 
                <xsl:value-of select="firstName"/> is a student
            </p>
            <p>
                <xsl:value-of select="height[@unit='cm']"/> is their height in <xsl:value-of select="height/@unit"/>
            </p>
            </xsl:for-each>
        </body>
    </xsl:template>
</xsl:stylesheet>