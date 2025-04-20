import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    const formData = await request.formData();
    const file = formData.get('file') as File;

    // Process the file (save to filesystem, upload to S3, etc.)
    console.log('Received file:', file.name, file.size);

    // Additional validation
    const allowedTypes = ['application/pdf', 'image/png'];
    if (!allowedTypes.includes(file.type)) {
        alert('Invalid file type');
        return;
    }

    if (file.size > 5 * 1024 * 1024) { // 5MB limit
        alert('File too large');
        return;
    }

    return NextResponse.json({
        success: true,
        filename: file.name,
        size: file.size
    });
}