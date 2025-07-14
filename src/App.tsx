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
    navigator.clipboard.writeText(`npx shadcn@latest add pulse-badge`);
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
            <Badge variant="outline">New</Badge>
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
                  npx shadcn@latest add pulse-badge
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

          {/* Sizes */}
          <Card>
            <CardHeader>
              <CardTitle>Sizes</CardTitle>
              <CardDescription>
                Different sizes for various use cases
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-4 mb-6">
                <PulseBadge size="sm">Small</PulseBadge>
                <PulseBadge size="default">Default</PulseBadge>
                <PulseBadge size="lg">Large</PulseBadge>
              </div>
              <div className="bg-muted p-4 rounded-md">
                <code className="text-sm">
                  {`<PulseBadge size="sm">Small</PulseBadge>
<PulseBadge size="default">Default</PulseBadge>
<PulseBadge size="lg">Large</PulseBadge>`}
                </code>
              </div>
            </CardContent>
          </Card>

          {/* Pulse Speed */}
          <Card>
            <CardHeader>
              <CardTitle>Pulse Speed</CardTitle>
              <CardDescription>
                Control the animation speed of the pulse effect
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-4 mb-6">
                <PulseBadge pulseSpeed="slow">Slow Pulse</PulseBadge>
                <PulseBadge pulseSpeed="normal">Normal Pulse</PulseBadge>
                <PulseBadge pulseSpeed="fast">Fast Pulse</PulseBadge>
              </div>
              <div className="bg-muted p-4 rounded-md">
                <code className="text-sm">
                  {`<PulseBadge pulseSpeed="slow">Slow Pulse</PulseBadge>
<PulseBadge pulseSpeed="normal">Normal Pulse</PulseBadge>
<PulseBadge pulseSpeed="fast">Fast Pulse</PulseBadge>`}
                </code>
              </div>
            </CardContent>
          </Card>

          {/* Real-world Example */}
          <Card>
            <CardHeader>
              <CardTitle>Real-world Example</CardTitle>
              <CardDescription>
                Using pulse badges in a dashboard context
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <Card>
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-sm font-medium">
                        Server Status
                      </CardTitle>
                      <PulseBadge variant="success" size="sm">
                        Online
                      </PulseBadge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-2xl font-bold">99.9%</p>
                    <p className="text-xs text-muted-foreground">Uptime</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-sm font-medium">
                        Build Status
                      </CardTitle>
                      <PulseBadge variant="warning" size="sm">
                        Building
                      </PulseBadge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-2xl font-bold">3m 24s</p>
                    <p className="text-xs text-muted-foreground">Duration</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-sm font-medium">
                        API Health
                      </CardTitle>
                      <PulseBadge size="sm">Active</PulseBadge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-2xl font-bold">142ms</p>
                    <p className="text-xs text-muted-foreground">
                      Response time
                    </p>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>

          {/* API Reference */}
          <Card>
            <CardHeader>
              <CardTitle>API Reference</CardTitle>
              <CardDescription>Props and configuration options</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-2">Prop</th>
                      <th className="text-left p-2">Type</th>
                      <th className="text-left p-2">Default</th>
                      <th className="text-left p-2">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="p-2 font-mono">variant</td>
                      <td className="p-2">
                        "default" | "success" | "warning" | "destructive"
                      </td>
                      <td className="p-2">"default"</td>
                      <td className="p-2">Visual style variant</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2 font-mono">size</td>
                      <td className="p-2">"sm" | "default" | "lg"</td>
                      <td className="p-2">"default"</td>
                      <td className="p-2">Size of the badge</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2 font-mono">pulseSpeed</td>
                      <td className="p-2">"slow" | "normal" | "fast"</td>
                      <td className="p-2">"normal"</td>
                      <td className="p-2">Speed of the pulse animation</td>
                    </tr>
                    <tr>
                      <td className="p-2 font-mono">children</td>
                      <td className="p-2">React.ReactNode</td>
                      <td className="p-2">-</td>
                      <td className="p-2">Badge content</td>
                    </tr>
                  </tbody>
                </table>
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
            It follows shadcn/ui design patterns but doesn't actually exist in
            the official library.
          </p>
        </div>
      </div>
    </div>
  );
}
