import {
    createClient
} from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
const supabase = createClient('https://raiuyvyqkigbgjsrmuyl.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJhaXV5dnlxa2lnYmdqc3JtdXlsIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY3MzM4OTMwMiwiZXhwIjoxOTg4OTY1MzAyfQ.BseYiBF6EDnNEm8cbEg8jTIPtiSV3CYrBJFKSZ_wFHk')

export {
    supabase
}