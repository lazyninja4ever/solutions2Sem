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
                <xsl:choose>
                    <xsl:when test="height[@unit='cm']">
                        <p>
                            <xsl:value-of select="height[@unit='cm']"/> is their height in cm
                        </p>
                    </xsl:when>

                    <xsl:when test="height[@unit='m']">
                        <p>
                            <xsl:value-of select="height[@unit='m']"/> is their height in metres
                        </p>
                    </xsl:when>

                    <xsl:otherwise>
                        <p>
                         Their height is unknown
                         </p>
                    </xsl:otherwise>
                </xsl:choose>
                
            </xsl:for-each>
        </body>
    </xsl:template>
</xsl:stylesheet>