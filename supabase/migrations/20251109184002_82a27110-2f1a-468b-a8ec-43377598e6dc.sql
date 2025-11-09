-- Create the waitlist leads table for KOSHAM exclusive drop
CREATE TABLE public.kosham_waitlist_leads (
  lead_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone_number VARCHAR(20) NOT NULL,
  city VARCHAR(100) NOT NULL,
  pin_code VARCHAR(10) NOT NULL,
  registration_timestamp TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Create unique index on email to prevent duplicate submissions
CREATE UNIQUE INDEX idx_kosham_waitlist_email ON public.kosham_waitlist_leads(email);

-- Enable Row Level Security
ALTER TABLE public.kosham_waitlist_leads ENABLE ROW LEVEL SECURITY;

-- Policy: Allow anyone to insert (for public waitlist form)
-- This enables the waitlist form to work without authentication
CREATE POLICY "Allow public inserts"
ON public.kosham_waitlist_leads
FOR INSERT
TO anon, authenticated
WITH CHECK (true);

-- Note: No SELECT policies are created intentionally
-- This protects PII data - only admins can view through backend panel