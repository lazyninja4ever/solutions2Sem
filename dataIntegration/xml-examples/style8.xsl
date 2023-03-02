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
                <xsl:sort select="age" order="ascending" data-type="number"/>
                <xsl:apply-templates select="firstName"/>
            </xsl:for-each>
        </body>
    </xsl:template>

    <xsl:template match="firstName">
        <p> 
            <xsl:attribute name="class">student_para</xsl:attribute>
            <xsl:value-of select="."/> is a student
        </p>
    </xsl:template>
</xsl:stylesheet>