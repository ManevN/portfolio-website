---
title: "Memory Management"
date: "2025-07-03"
---

**Copy-On-Write** | **Deep Copy** | **Shadow Copy or** **Shadow Paging**| **Write-Ahead Logging**

**CoW (Copy-On-Write)** is memory optimization technique commonly used in memory management. So instead of immediately duplication data when a copy is requested, the system creates a new reference (or pointer) to the existing data. The actual data is only copied when one of the references tries to modify it. At that point, a **real (deep) copy** is made, ensuring that the changes don’t affect the original data.

- Key Concepts: are efficient memory user, lazy copying
- Used in virtual memory, fork system call in Unix/Linux and some standard containers like C++’s std::string in some implementations.

**Shadow paging** is copy-on-write technique used to avoid in-place updates of data pages in a database. Instead of modifying data directly, the system creates a shadow copy of the page to be updated.

- When a page is modified, a new (shadow) page is allocated.
- This shadow page has no incoming references from other pages (yet), so it can be sagely modified.
- Once the modifications are complete and verified, the system updates the reference (e.g in the page table or root pointer) to point to the new version.
- The old page becomes obsolete and can be discarded or reused later.
- Key points: Crash recovery, Consistency, No Redo/Undo logging

The real deep copy, mention in Copy-on-Write and shadow page in Shadow Paging are related concepts - both involves creating a new copy instead of modifying data in place - but they are not exactly the same. The differ in purpose, the CoW is for memory and data efficiency and Shadow Paging is for crash recovery and consistency.

- So we can say that shadow page is type of deep copy, used specifically in the context of database systems, in both cases, a new, independent copy is made before making changes, but the indent and management differ.

So Deep Copy and Shadow Copy are two different approach for different purposes and comes from different contexts, even both are similar and are about create copy. Every  shadow copy is deep copy, but not every deep copy is a shadow copy.

- They differ in copy granularity, commit mechanism and when it is copied.

Deep Copy 

- Full duplication for isolation | Programming (e.g objects, structures)
- Deep copy created a completely independent clone of an object or data structure, all nested structures are recursively copied.
- Changes to the original do not affect the copy and vice versa
- Common in programming (e.g., cloning complex objects in Python, Java, etc)
- When it is copied: Immediately (full copy at once)
- Commit mechanism: No needed
- Copy granularity: Entire structure (all fields)

Shadow Copy 

- Safe update and recovery | DBMS, File Systems | On
- Shadow copy has special meaning in systems like databases, involving transactional control and page-level updates
- Shadow copy also called a shadow page.
- You write to the shadow copy instead of modifying the original
- It is copy-on-write clone created to ensure data integrity during updates and recovery.
- When it is copied: On write or update, selectively
- Commit mechanism: Needed (shadow replaces original)
- Copy granularity: Usually per-page or per-block

---

Database Management System (DBMS)

- Deep Copy
    - Rarely used explicitly
    - Might be used internally when duplication complex data structures (e.g., query plans, metadata), but not for transactional page updates.
- Shadow Copy / Shadow Page
    - A core recovery mechanism
    - Used to implement atomic updates and crash consistency
    - Examples:
        - Shadow paging in early DBMS designs like System R
        - Some embedded DBs (e.g., SQLite in “WAL” or rollback journal mode use similar techniques)

In Operating Systems (OS)

- Deep Copy
    - Used in process cloning or data structure duplication.
    - Before copy-on-write was widespread, forking a process meant deep-copying memory
- Shadow Copy
    - OSes use copy-on-write and shadowing for performance and safety:
        - Copy-on-Write Fork:
            - When a process is fork()-ed, no deep copy of memory is made initially.
            - Only modified memory pages are copied (shadowed) when written to
        - Volume Shadow Copy in Windows:
            - Used to create snapshot of file systems for backup or restore
            - Makes read-only shadow copies of entire volumes.
