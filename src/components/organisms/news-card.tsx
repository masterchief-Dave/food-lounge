import { Card, CardContent, CardDescription, CardTitle } from "../ui/card";

type Newscardprop = {
  title: string;
  description: string;
  picture: string;
};

function NewsCard({ description, picture, title }: Newscardprop) {
  return (
    <Card className="space-y-12 p-2">
      <img
        src={picture}
        alt={title}
        className="rounded-xl w-full object-cover"
      />
      <CardContent>
        <CardTitle className="text-3xl font-bold">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardContent>
    </Card>
  );
}

export default NewsCard;
