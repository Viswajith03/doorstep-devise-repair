
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { issues } from '@/data/repairData';
import { cn } from '@/lib/utils';
import { ArrowLeft, BatteryCharging, Camera, Database, Droplets, Keyboard, Laptop, Monitor, MousePointer, Plug, Settings, Smartphone, Volume2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface IssueSelectionProps {
  selectedDevice: string;
  selectedIssue: string | null;
  onSelectIssue: (issueId: string) => void;
  onBack: () => void;
}

const IssueSelection: React.FC<IssueSelectionProps> = ({ 
  selectedDevice, 
  selectedIssue, 
  onSelectIssue,
  onBack
}) => {
  // Filter issues that are compatible with the selected device type
  const compatibleIssues = issues.filter(issue => 
    issue.compatibleDevices.includes(selectedDevice)
  );

  // Function to get the correct icon component based on the icon name
  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case 'battery-charging':
        return <BatteryCharging className="h-6 w-6" />;
      case 'monitor':
        return <Monitor className="h-6 w-6" />;
      case 'droplets':
        return <Droplets className="h-6 w-6" />;
      case 'settings':
        return <Settings className="h-6 w-6" />;
      case 'plug':
        return <Plug className="h-6 w-6" />;
      case 'volume-2':
        return <Volume2 className="h-6 w-6" />;
      case 'camera':
        return <Camera className="h-6 w-6" />;
      case 'keyboard':
        return <Keyboard className="h-6 w-6" />;
      case 'mouse-pointer':
        return <MousePointer className="h-6 w-6" />;
      case 'database':
        return <Database className="h-6 w-6" />;
      default:
        return selectedDevice === 'smartphone' 
          ? <Smartphone className="h-6 w-6" /> 
          : <Laptop className="h-6 w-6" />;
    }
  };

  return (
    <div className="space-y-6 slide-in">
      <div className="text-center space-y-2 mb-8">
        <h2 className="text-2xl md:text-3xl font-bold">What needs to be fixed?</h2>
        <p className="text-muted-foreground">
          Select the issue with your device
        </p>
      </div>
      
      <div className="mb-6">
        <Button 
          variant="ghost" 
          className="gap-2" 
          onClick={onBack}
        >
          <ArrowLeft className="h-4 w-4" /> Back to brand selection
        </Button>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {compatibleIssues.map((issue) => (
          <Card 
            key={issue.id}
            className={cn(
              "cursor-pointer transition-all duration-300 hover:shadow-md",
              selectedIssue === issue.id 
                ? "border-primary shadow-sm bg-primary/5" 
                : "border hover:border-primary/50"
            )}
            onClick={() => onSelectIssue(issue.id)}
          >
            <CardContent className="p-4 flex gap-4 items-start">
              <div className={cn(
                "h-12 w-12 rounded-full flex items-center justify-center shrink-0",
                selectedIssue === issue.id 
                  ? "bg-primary/20 text-primary" 
                  : "bg-secondary/10 text-secondary"
              )}>
                {getIconComponent(issue.icon)}
              </div>
              <div>
                <h3 className={cn(
                  "text-lg font-medium transition-colors",
                  selectedIssue === issue.id ? "text-primary" : "text-foreground"
                )}>
                  {issue.name}
                </h3>
                <p className="text-sm text-muted-foreground mt-1">
                  {issue.description}
                </p>
                <p className="text-sm font-medium mt-2">
                  Starting from ₹{issue.basePrice.toLocaleString()}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default IssueSelection;
