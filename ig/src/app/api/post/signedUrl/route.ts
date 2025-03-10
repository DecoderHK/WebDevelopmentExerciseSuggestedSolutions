import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const filename = searchParams.get('filename');
    
    if (!filename) {
        return NextResponse.json(
            { error: 'Missing required parameters' },
            { status: 400 }
        );
    }

    const s3 = new S3Client({
        region: process.env.NEXT_PUBLIC_AWS_REGION,
        credentials: {
            accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
            secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
        },
    });

    const getMimeType = (filename: string) => {
        const ext = filename.split('.').pop()?.toLowerCase();
        const mimeTypes: { [key: string]: string } = {
            'jpg': 'image/jpeg',
            'jpeg': 'image/jpeg',
            'png': 'image/png',
            'gif': 'image/gif',
        };
        return mimeTypes[ext || ''] || 'application/octet-stream';
    };

    const command = new PutObjectCommand({
        Bucket: process.env.NEXT_PUBLIC_BUCKET_NAME!,
        Key: filename!,
        ContentType: getMimeType(filename!),
    });

    const url = await getSignedUrl(s3, command, {
        expiresIn: 60 * 5,
    });

    return NextResponse.json({ url });
}