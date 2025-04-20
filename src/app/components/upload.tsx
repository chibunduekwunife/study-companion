"use client"; // Required for client-side interactivity

export default function FileUpload() {
    const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        const formData = new FormData();
        formData.append('file', file);

        try {
            const response = await fetch('/api/upload', {
                method: 'POST',
                body: formData,
            });
            const data = await response.json();
            console.log('Upload success:', data);
        } catch (error) {
            console.error('Upload failed:', error);
        }
    };

    return (
        <div className="space-y-4">
            <input
                type="file"
                onChange={handleUpload}
                className="block w-full text-sm text-gray-500
          file:mr-4 file:py-2 file:px-4
          file:rounded-md file:border-0
          file:text-sm file:font-semibold
          file:bg-blue-50 file:text-blue-700
          hover:file:bg-blue-100"
            />
        </div>
    );
}