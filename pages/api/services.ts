import { NextApiRequest, NextApiResponse } from 'next'
import { services } from '../../data'




function fn(req: NextApiRequest, res: NextApiResponse) { res.status(200).json({ services }); }
export default fn;