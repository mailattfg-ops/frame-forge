import { ImageGenerator } from "@/components/admin/ImageGenerator";

export default function AdminImages() {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Image Generator</h1>
          <p className="text-muted-foreground">
            Generate unique AI images for the website sections. Click "Generate All" or generate individual images, then download them to save as project assets.
          </p>
        </div>
        <ImageGenerator />
      </div>
    </div>
  );
}
