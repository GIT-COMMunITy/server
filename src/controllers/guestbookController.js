import GuestbookService from "../services/guestbookService.js";

const GuestbookController = {
  getEntries: (req, res) => {
    const entries = GuestbookService.getEntries();
    res.json(entries);
  },

  createEntry: (req, res) => {
    const { name, content } = req.body;
    const entry = GuestbookService.createEntry(name, content);
    res.status(201).json(entry);
  },

  updateEntry: (req, res) => {
    const { id } = req.params;
    const { name, content } = req.body;
    const updatedEntry = GuestbookService.updateEntry(id, name, content);
    if (!updatedEntry) {
      return res.status(404).send("Entry not found");
    }
    res.json(updatedEntry);
  },

  deleteEntry: (req, res) => {
    const { id } = req.params;
    GuestbookService.deleteEntry(id);
    res.status(204).end();
  },
};

export default GuestbookController;
