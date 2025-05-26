import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function HouseFellowshipContent() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <Card className="border-none shadow-none">
        <CardContent className="p-0 space-y-8">
          <section>
            <h2 className="font-bold text-lg mb-2">KNOWING ONE ANOTHER</h2>
            <p className="text-muted-foreground">
              helping people discover and use their gifts.
            </p>
          </section>

          <section>
            <h2 className="font-bold text-lg mb-2">RELATIONSHIP</h2>
            <p className="text-muted-foreground">
              In the early &quot;house churches&quot;, pictured vividly by Paul
              in Romans 16, fellowship would no doubt, often share a meal. There
              are few things more effective for building fellowship than sharing
              meals. It is no doubt partly due to this natural creating of CLOSE
              RELATIONSHIPS that the early church grew so fast, even in times of
              persecution.
            </p>
          </section>

          <section>
            <h2 className="font-bold text-lg mb-2">LOVE</h2>
            <Separator className="my-4" />
          </section>

          <section>
            <h2 className="font-bold text-lg mb-2">CARE & SHARING</h2>
            <Separator className="my-4" />
          </section>

          <section>
            <h2 className="font-bold text-lg mb-2">GROWTH</h2>
            <p className="text-muted-foreground">
              It is no surprise that the largest church in the world, Dr. Yonggi
              Cho&apos;s church in Seoul, Korea, with several hundred thousand
              members, is built on the house and cell group principle. According
              to those who study church growth, research has shown that seven
              smaller groups for every hundred people attending Sunday worship,
              is the minimum required for GROWTH.
            </p>
          </section>

          <section>
            <h2 className="font-bold text-lg mb-2">CONCURRENCE</h2>
            <p className="text-muted-foreground">
              Think of this is what Jesus had in mind when he declared,
              &quot;Wherever two or three of you come together in my name, I am
              there with you&quot; (Matthew 18:20). I want to think he meant,
              &quot;even if only a few, you gather in my name, I am there.&quot;
              The small group is not just a technique for church growth,
              although it is that. There is a special kind of way. In other
              words, the basic building block of the church is the small group
              in which the members are committed to one another in Christ. We
              tend to think of the small group as simply being a part of the
              church. The New Testament does not make this distinction. It is
              the church.
            </p>
          </section>

          <section>
            <h2 className="font-bold text-lg mb-2">
              JESUS AND HOUSE FELLOWSHIP
            </h2>
            <p className="text-muted-foreground">
              LUK 17:5 &amp; 6,10:38
              <br />
              MATT 18:20,LUKE 24: 14-17,32
            </p>
          </section>

          <section>
            <h2 className="font-bold text-lg mb-2">PAUL & HOUSE FELLOWSHIP</h2>
            <p className="text-muted-foreground">
              Paul&apos;s use of house fellowship, Acts 16:18, considering
              cities with known house churches, social and theological
              considerations relative to the house churches, general and
              sequential priorities of church planting, Paul&apos;s coworkers in
              the mission, and the leadership structures in Pauline house
              churches, the role of women in leading house churches.
            </p>
          </section>

          <section>
            <h2 className="font-bold text-lg mb-2">BENEFITS OF JOINING</h2>
            <ol className="list-decimal pl-5 space-y-6 text-muted-foreground">
              <li>
                <p className="font-medium text-foreground mb-2">
                  You will begin to really feel like part of God&apos;s family.
                </p>
                <p>
                  From its very beginning has had small groups. We believe the
                  modern church has a special need for them today. The small
                  group is God&apos;s answer to our need to provide a small
                  group for everyone that would get concerned in Grace. In a
                  society that is increasingly mobile and stress families are
                  breaking apart, small groups can provide a family.
                </p>
              </li>

              <li>
                <p className="font-medium text-foreground mb-2">
                  You will grow spiritually faster in a group than alone.
                </p>
                <p>
                  We have been &quot;predestined to become conformed to the
                  image of Christ&quot; (Rom. 8:29). Spiritual growth involves
                  receiving &quot;the word implanted&quot; (James 1:21) and
                  learning from others. The 22 &quot;one another&quot; commands
                  that we are to &quot;put off&quot; godly character and
                  &quot;run away&quot; from the problems of youth. The verse
                  instructs us not to do this alone but &quot;with those who
                  call the Lord from a pure heart&quot; (2 Tim. 2:22). Just as
                  physical exercise requires training, it&apos;s always better
                  to exercise physically or spiritually in a group than alone (1
                  Tim. 4:7b).
                </p>
              </li>

              {/* Add more benefits... */}
            </ol>
          </section>

          <section>
            <h2 className="font-bold text-lg mb-2">What happens at meeting?</h2>
            <p className="mb-4 text-muted-foreground">
              Many of our meetings are design around the 5W&apos;s:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
              <li>
                <span className="font-medium text-foreground">Welcome</span> –
                Greeting one another as group members arrive, share refreshments
                and an ice-breaker session
              </li>
              <li>
                <span className="font-medium text-foreground">Worship</span> –
                Asking God to manifest His presence in the meeting
              </li>
              <li>
                <span className="font-medium text-foreground">Witness</span> –
                celebrating opportunities to share or display our faith with our
                unchurched friends
              </li>
              <li>
                <span className="font-medium text-foreground">Word</span> –
                studying God&apos;s Word together
              </li>
              <li>
                <span className="font-medium text-foreground">Works</span> –
                breaking into sub-groups for life application, accountability
                and prayer
              </li>
            </ul>
          </section>
        </CardContent>
      </Card>
    </div>
  );
}
