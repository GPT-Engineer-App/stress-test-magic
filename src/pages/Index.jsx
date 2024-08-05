import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">All About Dogs</h1>
        
        <div className="mb-8">
          <img 
            src="https://images.unsplash.com/photo-1517849845537-4d257902454a" 
            alt="Cute dog" 
            className="mx-auto object-cover w-full h-[400px] rounded-lg shadow-lg"
          />
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>What are Dogs?</CardTitle>
            <CardDescription>Man's best friend</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Dogs are domesticated mammals, not natural wild animals. They were originally bred from wolves. They have been bred by humans for a long time, and were the first animals ever to be domesticated.</p>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Characteristics of Dogs</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5">
              <li>Loyal and affectionate</li>
              <li>Highly trainable</li>
              <li>Come in various sizes and breeds</li>
              <li>Have an excellent sense of smell</li>
              <li>Require regular exercise and care</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Popular Dog Breeds</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5">
              <li>Labrador Retriever</li>
              <li>German Shepherd</li>
              <li>Golden Retriever</li>
              <li>French Bulldog</li>
              <li>Beagle</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;
