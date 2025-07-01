import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

type TestimonialCardProps = {
  name: string;
  country: string;
  date: string;
  content: string;
  avatarUrl?: string;
};

const TestimonialCard = ({
  name,
  country,
  date,
  content,
  avatarUrl,
}: TestimonialCardProps) => {
  return (
    <Card className="bg-[#191919] text-foreground shadow-md rounded-xl border border-muted">
      <CardContent className="p-4">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-start gap-3">
            <Avatar className="w-12 h-12 rounded-md">
              <AvatarImage
                src={avatarUrl}
                alt={name}
                className="object-cover"
              />
              <AvatarFallback>{name[0]}</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-base font-semibold">{name}</p>
              <p className="text-sm text-muted-foreground">{country}</p>
            </div>
          </div>

          <p className="text-sm text-muted-foreground mt-1 whitespace-nowrap">
            {date}
          </p>
        </div>

        <Separator className="my-3" />

        <p className="text-base leading-relaxed text-muted-foreground">
          {content}
        </p>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
