import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Home, ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';

export default function PageNotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 bg-background">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-8xl mb-6"
        >
          🗺️
        </motion.div>
        <h1 className="text-4xl font-extrabold mb-2">Page Not Found</h1>
        <p className="text-muted-foreground mb-8 max-w-md">
          Looks like you've wandered off the learning path. Let's get you back on track!
        </p>
        <div className="flex gap-4 justify-center">
          <Link to="/">
            <Button size="lg" className="rounded-xl">
              <Home className="w-4 h-4 mr-2" />
              Go Home
            </Button>
          </Link>
          <Button size="lg" variant="outline" className="rounded-xl" onClick={() => window.history.back()}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Go Back
          </Button>
        </div>
      </motion.div>
    </div>
  );
}